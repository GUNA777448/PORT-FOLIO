/**
 * Agent Context Protocol (ACP) - Portfolio Integration
 * Standardized way to share and manage context for the portfolio's AI assistant.
 */

export class PortfolioContext {
  constructor() {
    this.context = {
      user: {
        last_viewed_section: 'hero',
        viewed_sections: new Set(['hero']),
        session_start: Date.now(),
        interaction_count: 0
      },
      environment: {
        theme: 'dark',
        three_js_active: true
      }
    };
  }

  updateSection(sectionId) {
    this.context.user.last_viewed_section = sectionId;
    this.context.user.viewed_sections.add(sectionId);
    this.context.user.interaction_count++;
    this.logContext();
  }

  logContext() {
    // In a real implementation, this would sync with an agent server
    console.log('ACP Context Updated:', {
      ...this.context.user,
      viewed_sections: Array.from(this.context.user.viewed_sections)
    });
  }

  getPromptContext() {
    return `User is currently viewing ${this.context.user.last_viewed_section}. They have seen: ${Array.from(this.context.user.viewed_sections).join(', ')}.`;
  }
}

export const acp = new PortfolioContext();
