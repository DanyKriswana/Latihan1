import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import axios from 'axios'
import { Await, BrowserRouter } from 'react-router-dom'
import App from '../../App'

jest.mock('axios', () => ({}))

test('Test home page', async() => {
    axios.get= jest.fn().mockResolvedValue({
        data: [{name: 'Namanama'}]
    })

    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )

    
    const btn = screen.getByRole('button')
    
    fireEvent.click(btn)

    await waitFor(() =>{
        return(
            screen.getByText('Namanama')
        )
    })

    const textNama =  screen.getByText('Namanama')
    expect(textNama).toBeInTheDocument()
})