import { connect } from "react-redux";
import {
  handleFetchBooks,
  handleMessageBox,
  handleMessage,
} from "../../../store/actions/manager";
import { stateType } from "../../../store";
import { withTranslation } from "react-i18next";
import DeletePopup from "./component";

const mapStateToProps = (state: stateType) => {
  return {};
};
const actionCreator = {
  handleFetchBooks,
  handleMessageBox,
  handleMessage,
};
export default connect(
  mapStateToProps,
  actionCreator
)(withTranslation()(DeletePopup as any));
