export interface FrontMatter {
    [prop: string]: string;
}

export interface MarkdownDocument {
    frontMatter: FrontMatter;
    content: string;
}

export interface MarkdownRenderingResult {
    frontMatter: FrontMatter;
    html: string;
}

// TODO: refine blog post types
// export type BlogLayoutProps = {
//     children: React.ReactNode;
//     frontMatter: BlogFrontMatter;
//     wordCount: number;
//     readingTime: string;
// };
//
// export interface BlogProps extends BlogPostsProps {
//     title: string;
//     description: string;
// }
//
// export type BlogPostsProps = {
//     posts?: BlogPostProps[];
// };
//
// export type BlogPostProps = {
//     slug: string;
//     siteTitle: string;
//     frontMatter: BlogFrontMatter;
//     markdownBody: any;
//     wordCount: number;
//     readingTime: string;
// };
//
// export type BlogFrontMatter = {
//     title: string;
//     description: string;
//     publishedDate: string;
//     tags: string[];
// };
