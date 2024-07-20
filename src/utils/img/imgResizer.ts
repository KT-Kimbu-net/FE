import Resizer from "react-image-file-resizer";

export const resizeImageFile = (file: any) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      240 /* width */,
      180 /* height */,
      "SVG" /* 파일형식 */,
      100 /* quality */,
      0 /* rotation */,
      (uri) => {
        /* resize new image with url*/
        resolve(uri);
      },
      "base64" /* output Type */
    );
  });
