import { get } from "../../apiClient/apiClient";
import cheerio from "cheerio";
import { Some, None, Right } from "monet";
import { Publication, IssueSummary } from "../model";

export async function getPublication(id) {
  return get(`/comic/${id}`).then(response => {
    return response.map(htmlPage => extractPublicationFromPage(id, htmlPage));
  });
}

function extractPublicationFromPage(id, htmlPage) {
  const loadedPage = cheerio.load(htmlPage);
  const image = loadedPage(".img-responsive")
    .first()
    .attr("src");
  const title = loadedPage(".listmanga-header")
    .first()
    .text()
    .trim();
  const status = extractStatus(loadedPage);
  const summary = loadedPage(".manga.well p")
    .first()
    .html()
    .trim();
  const infoTableTitles = loadedPage(".dl-horizontal dt");
  const infoTableValues = loadedPage(".dl-horizontal dd");
  const publisher = extractElementFromInfoTable(
    "Type",
    infoTableTitles,
    infoTableValues
  );
  const releaseDate = extractElementFromInfoTable(
    "Date of release",
    infoTableTitles,
    infoTableValues
  );
  const authors = extractElementFromInfoTable(
    "Author(s)",
    infoTableTitles,
    infoTableValues
  ).map(authorLink => {
    const loadedAuthorLink = cheerio.load(authorLink);
    return loadedAuthorLink.text().trim();
  });
  const issues = extractIssues(loadedPage);
  return Right(
    new Publication(
      id,
      image,
      title,
      status,
      summary,
      publisher,
      releaseDate,
      authors,
      issues
    )
  );
}

function extractStatus(loadedPage) {
  if (loadedPage(".label-success").length > 0) {
    return Some("Ongoing");
  } else if (loadedPage(".label-danger").length > 0) {
    return Some("Completed");
  } else {
    return None;
  }
}

function extractElementFromInfoTable(
  elementName,
  infoTableTitles,
  infoTableValues
) {
  let result = None();
  infoTableTitles.each((index, elem) => {
    const loadedElement = cheerio(elem);
    if (loadedElement.html().trim() === elementName && !result.isValue) {
      result = Some(
        infoTableValues
          .eq(index)
          .html()
          .trim()
      );
    }
  });
  return result;
}

function extractIssues(loadedPage) {
  const issues = [];
  const chaptersReleaseDate = loadedPage(".date-chapter-title-rtl");
  loadedPage(".chapters li h5 a").each((index, elem) => {
    const loadedElem = cheerio(elem);
    const publicationUrl = loadedElem.attr("href");
    const id = publicationUrl.substring(
      publicationUrl.lastIndexOf("/") + 1,
      publicationUrl.length
    );
    const title = loadedElem.html().trim();
    const releaseDate = chaptersReleaseDate
      .eq(index)
      .html()
      .trim();
    issues.push(new IssueSummary(id, title, releaseDate));
  });
  return issues;
}
