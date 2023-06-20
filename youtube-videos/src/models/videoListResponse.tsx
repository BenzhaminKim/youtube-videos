import { VideoDetailResponse } from "./videoDetailResponse";

export type videoListResponse = {
    kind: string;
    etag: string;
    items: VideoDetailResponse[];
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    },
}