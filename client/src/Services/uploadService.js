export default function uploadService (e, callback){
  e.preventDefault();

  // TODO: Refactor/Abstract. This should not be hard coded to allow use of upload service with other inputs.
  const input = document.getElementById("file_upload");

  if(!input.files) {
    throw new Error("No files selected for upload");
  }
  const file = input.files[0];
  const fileExt = file.name.split(".").pop();

  // TODO: Allowed types should be in separate shared file
  const allowedTypes = ["doc", "docx", "gif", "htm", "html", "img", "jpg", "jpeg", "pdf", "png", "tif", "txt"];

  if(!allowedTypes.includes(fileExt.toLowerCase())) {
    throw new Error("File type not supported");
  }

  fetch("/api/upload", {
    method: "POST",
    // TODO: allow headers as arg to upload service instead of hard-coding
    // headers: {
    //   "Content-Type": "multipart/form-data"
    // },
    body: file
  })
    .then((res) => {
      if(callback){
        callback(res);
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
}