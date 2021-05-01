import http from "../http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/uploadProfilePic/6", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1d2lzaGVtYUBnbWFpbC5jb20iLCJleHAiOjE2MTk5MzYwMjQsImlhdCI6MTYxOTg5MjgyNH0.jqPJhoZDdBWc_8Ldknjxqs0k2jnnWDRZu5G2zxPeWeD1V8X0vOGHppY3jyoZ_Av7owqsJ_OflVVJBi06qzgNfA'
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();
