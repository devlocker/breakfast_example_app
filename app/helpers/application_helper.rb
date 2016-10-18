module ApplicationHelper
	def markdown(text)
		markdown = Redcarpet::Markdown.new(HTMLwithPygments, fenced_code_blocks: true)
		markdown.render(text)
	end

	class HTMLwithPygments < Redcarpet::Render::HTML
		def block_code(code, language)
			Pygments.highlight(code, lexer: language)
		end
	end
end
