const ChipCard = ({ Titles, classes }: any) => {
    const HandleChipActivePaid = () => {
    }
    return (
        <>
            <div className={`badge badge-light-${classes} fw-bolder cursor-pointer me-lg-1`} onClick={HandleChipActivePaid} >
                {Titles}
            </div>
        </>
    )
}
export default ChipCard
