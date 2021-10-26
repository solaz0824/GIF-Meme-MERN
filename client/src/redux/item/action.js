import { toast } from "react-toastify";
import { uploadItemData } from "../../api";
import { uploadImages } from "../../services/cloudinary";
import { UPLOAD_REQUEST, UPLOAD_SUCCESS, UPLOAD_FAIL } from "./types";

export const uploadItemFile =
  (metadata, image, imageURL) => async (dispatch) => {
    console.log(metadata, image, imageURL);
    dispatch({ type: UPLOAD_REQUEST });
    try {
      let createdItem;
      if (image === "" && imageURL) {
        createdItem = await uploadItemData(metadata, imageURL);
      } else {
        const itemImage = await uploadImages(image);
        createdItem = await uploadItemData(metadata, itemImage.url);
      }
      toast.info("Successfully Uploaded");
      dispatch({ type: UPLOAD_SUCCESS, payload: createdItem });
    } catch (error) {
      toast.error("Something went wrong! Try again");
      dispatch({ type: UPLOAD_FAIL, payload: error.message });
    }
  };
