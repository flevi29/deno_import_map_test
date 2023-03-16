import { XMLParser } from "fast-xml-parser";

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  parseAttributeValue: false,
  trimValues: true,
  processEntities: true,
  parseTagValue: false,
});

console.log(xmlParser.parse("<some>XML</some>"));
