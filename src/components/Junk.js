import React, {
    Component
} from 'react'
import axios from 'axios'

export default class Junk extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            dog_list: []
        }
    }

    componentWillMount() {
        axios.get("https://dog.ceo/api/breed/retriever/golden/images")
            .then(data => {
                const dog_images = data.data.message
                this.setState({dog_list: dog_images})
            })
            .catch(err => console.log(err))
    }

    render() {
        const AllDogs = this.state.dog_list.map((dog, index) => {
            return (<img key={index} src={dog} />)
        })
        return ( 
            <div >
                {AllDogs}
            </div>
        )
    }


}