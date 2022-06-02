import { Container } from "./style"

type ErrorMessageProps = {
    message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <Container>
            <h1>{message}</h1>
        </Container>
    )
}