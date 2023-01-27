import Dropdown from "react-bootstrap/Dropdown";

export default function Header({ setSuccess, username, removeFromCookie }) {
  const styles = {
    gridTemplateColumns: "1fr 2fr",
  };
  console.log("username", username);
  return (
    <header className="py-3 mb-3 border-bottom">
      <div
        className="container-fluid d-grid gap-3 align-items-center"
        style={styles}
      >
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0 dropdown">
            <Dropdown>
              <Dropdown.Toggle
                variant="info"
                style={{ background: "transparent", border: "none" }}
                id="dropdown-basic"
                className="d-flex align-items-center"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  className="rounded-circle"
                  width="32"
                  height="32"
                />
                <p className="m-0 p-1">{username}</p>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    removeFromCookie()
                    setSuccess(false);
                  }}
                >
                  Log Out
                </Dropdown.Item>
                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}
