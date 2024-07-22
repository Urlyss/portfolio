import { Client } from "@notionhq/client";
import { TAbout, TExperience, TWork } from "./utils";

export class NotionClient {
  private static instance: NotionClient;
  private notion: Client;

  private constructor() {
    this.notion = new Client({ auth: process.env.NOTION_API_KEY });
  }

  public static getInstance(): NotionClient {
    if (!NotionClient.instance) {
      NotionClient.instance = new NotionClient();
    }
    return NotionClient.instance;
  }

  public async queryDatabase(databaseId: string) {
    try {
      const response = await this.notion.databases.query({
        database_id: databaseId,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export const getSocials = async () => {
  const defaultSocialList = {
    github: "https://github.com/urlyss",
    linkedin: "https://linkedin.com/in/urlyss",
    x: "https://x.com/odusseuskamto",
    mail: "odusseuskamto@gmail.com",
    phone: "+237690760442",
    resume: "https://drive.google.com/file/d/19lkM3afivegnzkyVdjCT16viw0qbCZjo/view?usp=embed_facebook",
  };
  const socialList = {...defaultSocialList}
  const notionClient = NotionClient.getInstance();
  const databaseId = process.env.NOTION_SOCIAL_DATABASE_ID || "";
  const response = await notionClient.queryDatabase(databaseId);
  response?.results.forEach((ab) => {
    //@ts-ignore
    Object.entries(ab.properties).forEach(([propertyName, propertyValue]) => {
      //@ts-ignore
      socialList[propertyName] = propertyValue.rich_text && propertyValue.rich_text
          .map(
            //@ts-ignore
            (cat) => cat.plain_text
          )
          .join("\n");
    });
  });
  return socialList;
};

export const getAbout = async () => {
  const defaultAboutSection:TAbout = { logo: "https://placehold.co/400x400?text=urlyss+kamto", job_title: "Front end developer", about_me: "I'm a front end developper based in Douala", header: "Hey, I'm Urlyss 👋" };
  const  aboutSection = {...defaultAboutSection}
  const notionClient = NotionClient.getInstance();
  const databaseId = process.env.NOTION_ABOUT_DATABASE_ID || "";
  const response = await notionClient.queryDatabase(databaseId);

  response?.results.forEach((ab) => {
    //@ts-ignore
    Object.entries(ab.properties).forEach(([propertyName, propertyValue]) => {
      //@ts-ignore
      aboutSection[propertyName] = propertyValue.rich_text && propertyValue.rich_text
          .map(
            //@ts-ignore
            (cat) => {
              return cat.plain_text.split('\n')
            }
          )
          .join("\n");
    });
  });
  return aboutSection;
};
export const getExperiences = async () => {
  const defaultExperiencesList = [{
    company:"Ease Travel Service",
    job_title:"front-end developer",
    dates:"2022 - present",
    link:"ease.travel"
  }]
  const experiencesList: TExperience[] = [...defaultExperiencesList];
  const notionClient = NotionClient.getInstance();
  const databaseId = process.env.NOTION_EXPERIENCE_DATABASE_ID || "";
  const response = await notionClient.queryDatabase(databaseId);
  response?.results.forEach((ab) => {
    const exp = { company: "", job_title: "", dates: "", link: "" };
    //@ts-ignore
    Object.entries(ab.properties).forEach(([propertyName, propertyValue]) => {
      experiencesList.shift()
      //@ts-ignore
      exp[propertyName] = propertyValue.rich_text && propertyValue.rich_text
          .map(
            //@ts-ignore
            (cat) => cat.plain_text
          )
          .join("\n");
    });
    experiencesList.push(exp);
  });

  return experiencesList;
};

export const getWorks = async () => {
  const workList: TWork[] = [];
  const databaseId = process.env.NOTION_WORK_DATABASE_ID || "";
  const notionClient = NotionClient.getInstance();
  const response = await notionClient.queryDatabase(databaseId);
  response?.results.forEach((work) => {
    const finalWork = { category: [], name: "", icon: "",link:"" };
    //@ts-ignore
    Object.entries(work.properties).forEach(([propertyName, propertyValue]) => {
      switch (propertyName) {
        case "category":
          //@ts-ignore
          finalWork["category"] = propertyValue.multi_select.map(
            //@ts-ignore
            (cat) => cat.name
          );
          break;
        case "icon":
          //@ts-ignore
          finalWork["icon"] = propertyValue.rich_text
            //@ts-ignore
            .map((rt) => rt.plain_text)
            .join("\n");
          break;
          case "link":
          //@ts-ignore
          finalWork["link"] = propertyValue.rich_text
            //@ts-ignore
            .map((rt) => rt.plain_text)
            .join("\n");
          break;
        case "name":
          //@ts-ignore
          finalWork["name"] = propertyValue.title
            //@ts-ignore
            .map((rt) => rt.plain_text)
            .join("\n");
          break;
        default:
          break;
      }
    });
    workList.push(finalWork);
  });
  return workList;
};
