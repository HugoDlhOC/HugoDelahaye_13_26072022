export const MainInfos = ({name}) => {
    return <div>
        <div className="header">
            <h1>Welcome back<br/>{name}!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
    </div>
}