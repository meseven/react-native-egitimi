import { gql } from "@apollo/client";

export const GET_QUESTION_DETAIL = gql`
	query DetailQuery($id: Int!) {
		questions_by_pk(id: $id) {
			id
			text
			options {
				id
				text
			}
		}
	}
`;
