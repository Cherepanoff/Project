import 'app/styles/index.scss'

export const StyleDecorator = (StoryObj: React.ComponentType): JSX.Element => (
  <div>
    <StoryObj />
  </div>
)
