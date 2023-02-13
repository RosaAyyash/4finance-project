import "./CopiedPopup.css";

type CopiedPopupProps = {
  closePopup: any;
};
function CopiedPopup(props: CopiedPopupProps) {
  return (
    <div className="copied-popup-container">
      <div className="copied-popup-overlay" onClick={props.closePopup}></div>
      <div className="copied-pop-up-content">Successfuly Copied!</div>
    </div>
  );
}

export default CopiedPopup;
