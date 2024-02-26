export const ThemeDecorator = (StoryObj: React.ComponentType): JSX.Element => (
    <div className={'app dark'}>
        <StoryObj />
    </div>
)
