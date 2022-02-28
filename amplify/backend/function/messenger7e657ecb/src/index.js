/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STREAM_API_KEY
	STREAM_SECRET
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const { StreamChat } = require('stream-chat')

const serverClient = StreamChat.getInstance(process.env.STREAM_API_KEY, process.env.STREAM_SECRET)

exports.handler = async (event) => {
  try {
    const token = serverClient.createToken(event.id)

    return {
      data: {
        token,
      },
    }
  } catch (error) {
    return {
      data: null,
      error: error.message,
    }
  }
}
