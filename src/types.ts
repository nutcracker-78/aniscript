export interface RhizomeNodeData {
  id: string;
  page?: string;
  keywords: string[];
  argument: string;
  explanation: string;
  example?: string;
  critique?: string;
}

export interface CalloutData {
  id: string;
  position: 'left' | 'right';
  title: string;
  content: string;
  type?: 'context' | 'legal' | 'biology' | 'history';
}
