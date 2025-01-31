import { Stack, TextField } from "@fluentui/react";
import { Button, Tooltip } from "@fluentui/react-components";
import { Send28Filled } from "@fluentui/react-icons";
import styles from "./QuestionInput.module.css";
// import { SpeechInput } from "./SpeechInput";

export const QuestionInput = () => {
    return (
        <Stack horizontal className={styles.questionInputContainer}>
            <TextField
                className={styles.questionInputTextArea}
                placeholder="Type your question..."
                multiline
                resizable={false}
                borderless
            />
            <div className={styles.questionInputButtonsContainer}>
                <Tooltip content="Send your question" relationship="label">
                    <Button size="large" icon={<Send28Filled primaryFill="rgba(115, 118, 225, 1)" />} />
                </Tooltip>
            </div>
            {/* <SpeechInput /> */}
        </Stack>
    );
};
