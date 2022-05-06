export interface IResponsiveSizeAction {
  type: "RESIZE";
  isMobile: boolean;
}

export interface IResponsiveSizeState {
  isMobile: boolean;
  dispatch: React.Dispatch<IResponsiveSizeAction>;
}
