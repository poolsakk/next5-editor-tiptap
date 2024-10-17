import { EditorTiptap } from "@/components/post/editor-tiptap";
// import dynamic from 'next/dynamic';

// // Dynamically import CustomEditor with SSR disabled
// const CustomEditor = dynamic(() => import('@/components/post/custom-editor'), { ssr: false });

const PostPage = () => {
    return (
        <EditorTiptap/>
    );
}

export default PostPage;