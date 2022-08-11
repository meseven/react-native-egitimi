import { gql } from "@apollo/client";

export const GET_QUESTIONS_QUERY = gql`
	query QuestionsQuery {
		questions {
			id
			text
		}
	}
`;
