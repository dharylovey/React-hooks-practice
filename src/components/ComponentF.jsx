import { UserContext, MultiContext } from "../App";

const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <MultiContext.Consumer>
              {(benefit) => (
                <div>
                  User value {user} , {benefit}
                </div>
              )}
            </MultiContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;
