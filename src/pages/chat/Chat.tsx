
import { Helmet } from "react-helmet-async";
import styles from "./Chat.module.css";
import {HistoryButton} from "../../components/HistoryButton";
import {ClearChatButton} from "../../components/ClearChatButton";
import {UploadFile} from "../../components/UploadFile";
import {SettingsButton} from "../../components/SettingsButton";
// import {SparkleFilled} from "../../components/SparkleFilled";
// import LanguagePicker from "../../components/LanguagePicker";
import {UserChatMessage} from "../../components/UserChatMessage";
// import Answer from "../../components/Answer";
import {QuestionInput} from "../../components/QuestionInput/QuestionInput";

function Chat() {
    return (
        <div className={styles.container}>
            <Helmet>
                <title>Exotica IT Chat boat</title>
            </Helmet>
            <div className={styles.commandsSplitContainer}>
                <div className={styles.commandsContainer}>
                    <HistoryButton className={styles.commandButton} />
                </div>
                <div className={styles.commandsContainer}>
                    <ClearChatButton className={styles.commandButton} disabled={false} />
                    <UploadFile className={styles.commandButton} />
                    <SettingsButton className={styles.commandButton} />
                </div>
            </div>
            <div className={styles.chatRoot}>
                <div className={styles.chatContainer}>
                    <div className={styles.chatEmptyState}>
                        {/* <SparkleFilled fontSize={"120px"} primaryFill={"rgba(115, 118, 225, 1)"} aria-hidden="true" /> */}
                        <h1 className={styles.chatEmptyStateTitle}>Welcome to the Chat</h1>
                        <h2 className={styles.chatEmptyStateSubtitle}>Start a conversation</h2>
                        {/* <LanguagePicker /> */}
                    </div>
                    <div className={styles.chatMessageStream}>
                        <UserChatMessage message="Hello! How can I help you?" />
                        <div className={styles.chatMessageGpt}>
                            {/* <Answer answer="I'm here to assist you." /> */}
                        </div>
                    </div>
                    <div className={styles.chatInput}>
                        <QuestionInput placeholder="Type your message..." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;

// function Chat(){
//     return(
//         <>
//         <h1> you can do chat</h1>
//         </>
//     )
// }
// export default Chat;