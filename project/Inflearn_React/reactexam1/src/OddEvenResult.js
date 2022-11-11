const OddEvenResult = ({count}) => {

    console.log(count);


    return (
        <>
            <h2>{count % 2 === 0 ? '짝수' : '홀수'}</h2>
        </>
    )
}

export default OddEvenResult;