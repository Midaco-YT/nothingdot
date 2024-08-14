exports.handler = async (event, context) => {
    const secretCode = "T.C.";

    const body = JSON.parse(event.body);
    const { code } = body;

    if (code === secretCode) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: "Access granted!" }),
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: false, message: "Incorrect code." }),
        };
    }
};
