import { Button } from "@components/index"

type ConfirmProps = {
  handleCancel: () => void
  handleConfirm: () => void
}

const ConfirmModal = ({ handleCancel, handleConfirm }: ConfirmProps) => {
  return (
    <div className="form-btn">
      <Button
        children="Cancel"
        type="button"
        classButton="btn btn-cancel"
        onClick={handleCancel}
      />
      <Button
        type="button"
        onClick={handleConfirm}
        children="Confirm"
        classButton="btn btn-cancel"
      />
    </div>
  )
}

export default ConfirmModal
