import React, { useState } from "react";
import { LoginLayout } from "../../molecules/login-layout";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export const LoginContainer = () => {
    const navigate=useNavigate();
    const onClickLoginPersonal = () => { navigate('/clientLogin')};
    const onClickLoginEnterprise = () => {navigate('/enterpriseLogin') };

    return (
        <div className={styles.container}>
            <LoginLayout
                title="Personal"
                bodyContent={
                    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ut
                    iusto eos ab deserunt repellat distinctio nesciunt velit animi
                    consequuntur ullam, debitis impedit harum quisquam iste, eligendi
                    amet excepturi ipsa?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ut
                    iusto eos ab deserunt repellat distinctio nesciunt velit animi
                    consequuntur ullam, debitis impedit harum quisquam iste, eligendi
                    amet excepturi ipsa?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ut
                    iusto eos ab deserunt repellat distinctio nesciunt velit animi
                    consequuntur ullam, debitis impedit harum quisquam iste, eligendi
                    amet excepturi ipsa?
                    `
                }
                buttonProps={{
                    name: "Acceder",
                    type: "button",
                    onClick: onClickLoginPersonal,
                }}
                backgroundColor="#9FC5F8"
            />
            <LoginLayout
                title="Empresarial"
                bodyContent={
                    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ut
                    iusto eos ab deserunt repellat distinctio nesciunt velit animi
                    consequuntur ullam, debitis impedit harum quisquam iste, eligendi
                    amet excepturi ipsa?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ut
                    iusto eos ab deserunt repellat distinctio nesciunt velit animi
                    consequuntur ullam, debitis impedit harum quisquam iste, eligendi
                    amet excepturi ipsa?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ut
                    iusto eos ab deserunt repellat distinctio nesciunt velit animi
                    consequuntur ullam, debitis impedit harum quisquam iste, eligendi
                    amet excepturi ipsa?`
                }
                buttonProps={{
                    name: "Acceder",
                    type: "button",
                    onClick: onClickLoginEnterprise,
                }}
                backgroundColor="#F9CB9C"
            />
        </div>
    );
};
