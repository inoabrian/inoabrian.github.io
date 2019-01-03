import * as React from "react";
import firebase from "../../firebase";

const initialState: any = {
    profile: {
        name: "Brian Inoa",
        github: "inoabrian",
        company: "UPS",
        picture: ""
    }
};

type State = typeof initialState;

export interface IProfile {
    name: string;
    github: string;
    company: string;
    picture: string;
}

const storage: any = firebase.storage!();

export class Profile extends React.Component<IProfile, State> {
    state: State;
    constructor(props: any) {
        super(props);

        this.state = initialState;

        const files: Array<string> = ["brian_and_mia.jpg"];

        let self:any = this;

        files.map(filename => {
            storage
                .ref(`${filename}`)
                .getDownloadURL()
                .then((image: any) => {
                    self.setState({profile: { ...self.state.profile, picture: image }});
                });
        });
    }

    render(): JSX.Element {
        return (
            <div className="text-center" style={{marginTop: "auto", marginBottom: "auto", height: "300px", width: "500px"}}>
                <div className="col-12">
                    <img
                        className="img-thumbnail mx-auto d-block"
                        src={this.state.profile.picture}
                        style={{ height: "200px", width: "200px" }}
                        alt="Brian Inoa"></img>
                </div>
                <div className="col-12">
                    <h4>
                        {this.state.profile.name} - Software Engineer @ {this.state.profile.company}
                    </h4>
                </div>
            </div>
        );
    }
}