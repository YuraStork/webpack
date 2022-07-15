import { useState } from "react";
import Avatar from "react-avatar-edit";

export const ImageCrop = () => {
  const [preview, setPreview] = useState<null | string>(null);
  const [src, setSrc] = useState(
    null
  );

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview: string) => {
    console.log(preview);
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem: any) => {
    if (elem.target.files[0].size > 81680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  return (
    <>
        <Avatar
          width={390}
          height={295}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
        />
        {preview && <img src={preview} alt="Preview" />}
      </>
    
  );
};
