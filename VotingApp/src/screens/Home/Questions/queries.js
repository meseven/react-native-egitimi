import { gql } from "@apollo/client";

export const GET_QUESTIONS_SUBSCRIPTION = gql`
	subscription QuestionsSubscription {
		questions(order_by: { created_at: desc }) {
			id
			text
		}
	}
`;
