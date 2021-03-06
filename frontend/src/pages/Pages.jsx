import Qr from "../areas/qr/Qr";
import Chat from "../areas/chat/Chat";
import IngestForm from "../areas/ingest-form/IngestForm";
import LoginContainer from "../areas/login/LoginContainer";
import PageNavWrapper from "./PageNavWrapper";
import PatientContainer from "../areas/patient/PatientContainer";
import PatientsContainer from "../areas/patients/PatientsContainer";
import React from "react";
import SettingsContainer from "../areas/Settings/SettingsContainer";
import ShiftsContainer from "../areas/shifts/ShiftsContainer";

function pagify(NewPage) {
  return class extends React.Component {
    render() {
      return (
        <PageNavWrapper>
          <NewPage {...this.props} />
        </PageNavWrapper>
      );
    }
  };
}

export const PatientsPage = pagify(PatientsContainer);
export const PatientPage = pagify(PatientContainer);
export const ShiftsPage = pagify(ShiftsContainer);
export const ChatPage = pagify(Chat);
export const SettingsPage = pagify(SettingsContainer);
export const LoginPage = pagify(LoginContainer);
export const FormPage = pagify(IngestForm);
export const QrPage = pagify(Qr);
