import axios from "../../utils/axios";

const getRelatedVideos = async ({tags, id}) =>{


    // ?tags_like=javascript&tags_like=react&id_ne=4&_limit=5
// ['tags_like=javascript', 'tags_like=react']


    let limit = 5;
    let queryString =
        tags?.length > 0
            ? tags.map((tag) => `tags_like=${tag}`).join("&") +
              `&id_ne=${id}&_limit=${limit}`
            : `id_ne=${id}&_limit=${limit}`;

    const response = await axios.get(`/videos?${queryString}`);
    return response.data;
    
}

export default getRelatedVideos;

