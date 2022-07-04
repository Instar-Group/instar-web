export const post =  ({ params, request }) => {
    const data = request.formData()
  const username = request.body.username;
  const password = request.body.password;

  if (username == null) {
    return new Response(null, {
      status: 400,
      statusText: "Not found",
    });
  }
  try {
    if (password == "chk") {
      return new Response(null, {
        statusText: "Success",
      });
    } else {
      return new Response(null, {
        statusText: "Not allowed",
      });
    }
  } catch {
    return new Response(null, {
      status: 500,
    });
  }
};

