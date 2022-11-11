import UseInput from "../hooks/UseInput";

const InputCustom = () => {

    const maxLen = (value) => value.length <= 10;
    const name = UseInput("ANCHANIK", maxLen);

    return (
        <input type="text" {...name} />
    )
}

export default InputCustom;