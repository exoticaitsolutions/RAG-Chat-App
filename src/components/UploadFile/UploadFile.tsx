import React, { useState, ChangeEvent } from "react";
import { Callout, Label, Text } from "@fluentui/react";
import { Button } from "@fluentui/react-components";
import { Add24Regular, Delete24Regular } from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";
import styles from "./UploadFile.module.css";

interface Props {
    className?: string;
    disabled?: boolean;
}

export const UploadFile: React.FC<Props> = ({ className, disabled }) => {
    const [isCalloutVisible, setIsCalloutVisible] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
    const { t } = useTranslation();

    const handleButtonClick = () => {
        setIsCalloutVisible(!isCalloutVisible);
    };

    const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        setIsUploading(true);
        const file = e.target.files[0];

        // Simulating an upload process
        setTimeout(() => {
            setUploadedFiles(prev => [...prev, file.name]);
            setIsUploading(false);
        }, 1000);
    };

    const handleRemoveFile = (filename: string) => {
        setUploadedFiles(prev => prev.filter(file => file !== filename));
    };

    return (
        <div className={`${styles.container} ${className ?? ""}`}>
            <Button id="calloutButton" icon={<Add24Regular />} disabled={disabled} onClick={handleButtonClick}>
                {t("upload.manageFileUploads")}
            </Button>

            {isCalloutVisible && (
                <Callout
                    role="dialog"
                    className={styles.callout}
                    target="#calloutButton"
                    onDismiss={() => setIsCalloutVisible(false)}
                    setInitialFocus
                >
                    <form>
                        <Label>{t("upload.fileLabel")}</Label>
                        <input
                            accept=".txt, .jpg, .png, .pdf, .docx"
                            className={styles.chooseFiles}
                            type="file"
                            onChange={handleUploadFile}
                        />
                    </form>

                    {isUploading && <Text>{t("upload.uploadingFiles")}</Text>}

                    <h3>{t("upload.uploadedFilesLabel")}</h3>
                    {uploadedFiles.length === 0 ? (
                        <Text>{t("upload.noFilesUploaded")}</Text>
                    ) : (
                        uploadedFiles.map((filename, index) => (
                            <div key={index} className={styles.list}>
                                <div className={styles.item}>{filename}</div>
                                <Button icon={<Delete24Regular />} onClick={() => handleRemoveFile(filename)}>
                                    {t("upload.deleteFile")}
                                </Button>
                            </div>
                        ))
                    )}
                </Callout>
            )}
        </div>
    );
};
