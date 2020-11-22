import * as React from 'react';
import "../../public/index.scss"

// const App: React.FC<{name: string}> = props => {
//   const { name } = props;
//   return <p>{name} counter</p>
// }

interface Props {
    name: string;
    job: string;
}

// const App = ({name, job}: Props) => {
//     return (
//         <>
//             <div>{name}</div>
//             <div>{job}</div>
//         </>
//     );
// };

class App extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { name, job }: Props = this.props;
        return (
            <>
               <div className="title">{name}</div>
               <div>{job}</div>
            </>
        );
    }
}

export default App;
