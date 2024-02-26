import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryObj: React.ComponentType): JSX.Element => (
    <BrowserRouter>
        <StoryObj />
    </BrowserRouter>
)
