'use server'

import { client } from "@/utlils/appwrite";
import { Databases } from "node-appwrite";

const databases = new Databases(client);

export async function ListDocuments(db_id, collection_id, queries = []) {
    const result = await databases.listDocuments(
        db_id,
        collection_id,
        queries
    );

    console.log(result);

    return result;
}

export async function getBlogPosts(queries = []) {
    const result = await databases.listDocuments(
        'my-site-db',
        'blog',
        queries
    );

    console.log(result);

    return result;
}

export async function getGalleryPosts() {
    const result = await databases.listDocuments(
        'my-site-db',
        'post',
        [],
        { cache: false } // Disable caching
    );

    console.log("*********************************");
    console.log(result);
    console.log("*********************************");

    return result;
}
