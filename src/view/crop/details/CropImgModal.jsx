import React, { memo } from "react";

// // static import
import CustomModal from "../../../components/customModal/CustomModal";
// import "./style.scss";

function CropImgModal({ open, onClose, title, cropsData }) {
  return (
    <CustomModal open={open} onClose={onClose} title={title} size="sm">
      <img src={cropsData?.thumbnails?.[0]?.image} className="img_fluid" />
    </CustomModal>
  );
}

export default memo(CropImgModal);
