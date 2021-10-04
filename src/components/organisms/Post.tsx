import React from "react";
import DaumPostcode from "react-daum-postcode";

interface PropTypes {
  onClick: any;
}
const Post: React.FC<PropTypes> = ({ onClick }) => {
  let fullAddress: string = "";
  let extraAddress: string = "";
  const handleOnComplete = (postData: any) => {
    const { address, addressType, bname, buildingName } =
      postData;
    fullAddress = address;
    if (addressType === "R") {
      if (bname !== "") {
        extraAddress += bname;
      }
      if (buildingName !== "") {
        extraAddress +=
          extraAddress !== ""
            ? `, ${buildingName}`
            : buildingName;
      }
      fullAddress +=
        extraAddress !== "" ? ` (${extraAddress})` : "";
    }
  };
  const handleOnClose = () => {
    onClick && onClick(fullAddress, extraAddress);
  };
  return (
    <DaumPostcode
      onComplete={handleOnComplete}
      onClose={handleOnClose}
    />
  );
};

export default Post;
