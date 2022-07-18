import { FC, useState } from "react";
import Avatar from "react-avatar-edit";
import styled from "styled-components";

type ImageCropProps = {
  image: string | null;
  width: number;
  height: number;
  handleSavePhoto: (photo: string) => void;
};

const AvatarEditWrapper = styled.div`
  padding-top: 30px;
  display: flex;
`
export const ImageCrop: FC<ImageCropProps> = ({
  image,
  height = 200,
  width = 300,
  handleSavePhoto
}) => {
  const [preview, setPreview] = useState<null | string>(null);
  const [src, setSrc] = useState(image || "");

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview: string) => {
    console.log(preview);
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem: any) => {
    if (elem.target.files[0].size > 121680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const onSave = () => {
    if (preview) {
      handleSavePhoto(preview)
      return;
    }
  }
  return (
    <AvatarEditWrapper>
      <Avatar
        src={src}
        width={width}
        height={height}
        onCrop={onCrop}
        onClose={onClose}
        onBeforeFileLoad={onBeforeFileLoad}
      />
      <div><button onClick={onSave} type="button">save</button></div>
    </AvatarEditWrapper>
  );
};
