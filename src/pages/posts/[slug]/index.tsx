import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { Body } from '../../../components/templates/Body';
import { getParsedFileContentBySlug, renderMarkdown } from '../../../service/markdown';
import { MarkdownRenderingResult } from '../../../service/types';

interface PostProps extends ParsedUrlQuery {
    slug: string;
}

const POSTS_PATH = join(process.cwd(), '_posts');

export function Post({ frontMatter, html }: MarkdownRenderingResult) {
    return (
        <Body>
            <article className="prose">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-primary-100 to-primary-500">
                    {frontMatter.title}
                </h1>
                <main dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        </Body>
    );
}

export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({ params }: { params: PostProps }) => {
    const postMarkdownContent = getParsedFileContentBySlug(params.slug, POSTS_PATH);

    const renderedHTML = await renderMarkdown(postMarkdownContent.content);

    return {
        props: {
            frontMatter: postMarkdownContent.frontMatter,
            html: renderedHTML,
        },
    };
};

export const getStaticPaths: GetStaticPaths<PostProps> = async () => {
    const paths = fs
        .readdirSync(POSTS_PATH)
        .map((path) => path.replace(/\.md?$/, ''))
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export default Post;
