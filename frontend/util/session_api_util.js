export const signup = (organizer) => {
  return $.ajax({
      method: "POST",
      url: "api/organizers",
      data: { organizer },
    });
  };

export const login = (organizer) => {
  return $.ajax({
    method: "POST",
  	url: "api/session",
  	data: { organizer },
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "api/session",
  });
};
