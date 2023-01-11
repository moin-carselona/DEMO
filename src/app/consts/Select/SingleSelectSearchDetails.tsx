import React from 'react'
import Select from 'react-select'
import { colourStyles2 } from '../../../Css'
const SingleSelectSearchDetails = (props: any) => {
  const { handleChangeInputData, HeaderTitle, SelectData, DynamicKey, DynamicKey2, DynamicKey3, id, name } = props

  const [showData, setShowData] = React.useState<any>("")
  React.useEffect(() => {
    const updatedData = SelectData?.map((ele: any, i: number) => {
      let number = ele[DynamicKey3] ? '(' + ele[DynamicKey3] + ')' : "(NA)"
      if (ele[DynamicKey] !== null) {
        const newData = {
          label: ele[DynamicKey] + ' ' + ele[DynamicKey2] + number,
          value: ele[id],
        }
        return newData
      }
    })
    // reference2
    setShowData(updatedData)
  }, [SelectData])
  return (
    <div className='me-2'>
      <Select
        placeholder={HeaderTitle}
        isClearable
        isSearchable
        options={showData}
        onChange={(event) => handleChangeInputData(event, name)}
        defaultValue={showData}
        styles={colourStyles2}
      />
    </div>
  )
}
export default SingleSelectSearchDetails
