from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import Paragraph
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "temple-of-curiosity-brief.pdf"


PALETTE = {
    "background": colors.HexColor("#F6F0E8"),
    "panel": colors.HexColor("#FFFDF9"),
    "line": colors.HexColor("#D7C9B8"),
    "text": colors.HexColor("#191613"),
    "muted": colors.HexColor("#655F57"),
    "accent": colors.HexColor("#8A6640"),
    "accent_soft": colors.HexColor("#EFE4D4"),
}


def build_styles():
    styles = getSampleStyleSheet()
    return {
        "label": ParagraphStyle(
            "Label",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.2,
            leading=10,
            textColor=PALETTE["accent"],
            alignment=TA_LEFT,
            spaceAfter=0,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=styles["Normal"],
            fontName="Times-Bold",
            fontSize=28,
            leading=30,
            textColor=PALETTE["text"],
            alignment=TA_LEFT,
            spaceAfter=0,
        ),
        "subtitle": ParagraphStyle(
            "Subtitle",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10.4,
            leading=14,
            textColor=PALETTE["muted"],
            alignment=TA_LEFT,
            spaceAfter=0,
        ),
        "note": ParagraphStyle(
            "Note",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.3,
            leading=13,
            textColor=PALETTE["text"],
            alignment=TA_LEFT,
            spaceAfter=0,
        ),
        "card_title": ParagraphStyle(
            "CardTitle",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11.1,
            leading=13,
            textColor=PALETTE["text"],
            alignment=TA_LEFT,
            spaceAfter=0,
        ),
        "card_body": ParagraphStyle(
            "CardBody",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=8.85,
            leading=12.5,
            textColor=PALETTE["muted"],
            alignment=TA_LEFT,
            spaceAfter=0,
        ),
        "footer": ParagraphStyle(
            "Footer",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=8.9,
            leading=12.2,
            textColor=PALETTE["muted"],
            alignment=TA_LEFT,
            spaceAfter=0,
        ),
    }


def draw_wrapped_paragraph(c, text, style, x, y_top, width, height_limit):
    paragraph = Paragraph(text, style)
    width_used, height_used = paragraph.wrap(width, height_limit)

    if height_used > height_limit:
        raise ValueError(f"Content overflow for block: {text[:40]}...")

    paragraph.drawOn(c, x, y_top - height_used)
    return height_used


def draw_card(c, styles, x, y_top, width, height, label, title, body):
    c.setFillColor(PALETTE["panel"])
    c.setStrokeColor(PALETTE["line"])
    c.roundRect(x, y_top - height, width, height, 12, fill=1, stroke=1)

    inset = 12
    cursor = y_top - inset

    draw_wrapped_paragraph(c, label, styles["label"], x + inset, cursor, width - 2 * inset, 16)
    cursor -= 15
    cursor -= draw_wrapped_paragraph(
        c, title, styles["card_title"], x + inset, cursor, width - 2 * inset, 22
    )
    cursor -= 8
    body_limit = height - 48
    draw_wrapped_paragraph(
        c, body, styles["card_body"], x + inset, cursor, width - 2 * inset, body_limit
    )


def draw_header(c, styles, x, y_top, width):
    draw_wrapped_paragraph(
        c,
        "Temple of Curiosity",
        styles["title"],
        x,
        y_top,
        width,
        40,
    )

    subtitle = (
        "Temple of Curiosity brief - a mobile-first quizzing concept where AI and "
        "human intelligence combine to accelerate quizmaster taste."
    )
    draw_wrapped_paragraph(c, subtitle, styles["subtitle"], x, y_top - 38, width, 42)

    pill_text = "SKETCH OF AN IDEA"
    pill_width = stringWidth(pill_text, "Helvetica-Bold", 8.4) + 18
    c.setFillColor(PALETTE["accent_soft"])
    c.setStrokeColor(PALETTE["line"])
    c.roundRect(x, y_top - 72, pill_width, 18, 9, fill=1, stroke=0)
    c.setFillColor(PALETTE["accent"])
    c.setFont("Helvetica-Bold", 8.4)
    c.drawString(x + 9, y_top - 66.5, pill_text)

    note_box_y = y_top - 96
    note_box_height = 44
    c.setFillColor(PALETTE["panel"])
    c.setStrokeColor(PALETTE["line"])
    c.roundRect(x, note_box_y - note_box_height, width, note_box_height, 10, fill=1, stroke=1)
    note = (
        "This is a directional concept note, not a locked product specification. "
        "The goal is to test the shape of a mobile-native quiz platform where creators "
        "host worlds, players get hooked through immersive play, and AI amplifies human taste."
    )
    draw_wrapped_paragraph(
        c, note, styles["note"], x + 12, note_box_y - 8, width - 24, note_box_height - 10
    )


def generate_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    styles = build_styles()
    page_width, page_height = A4
    c = canvas.Canvas(str(OUTPUT), pagesize=A4)

    c.setFillColor(PALETTE["background"])
    c.rect(0, 0, page_width, page_height, fill=1, stroke=0)

    margin_x = 16 * mm
    margin_top = 16 * mm
    content_width = page_width - 2 * margin_x
    y_top = page_height - margin_top

    draw_header(c, styles, margin_x, y_top, content_width)

    grid_top = y_top - 142
    gutter = 10
    column_width = (content_width - gutter) / 2
    card_height = 138
    row_gap = 10

    cards = [
        (
            "Thesis",
            "AI plus human taste",
            "Temple of Curiosity is not just a question generator. It is a system where AI helps extend a quizmaster's style, but human intelligence still decides structure, fairness, and final publish quality. The value lies in accelerating taste, not replacing it.",
        ),
        (
            "Route 1",
            "People host their own quizzes",
            "Creators seed the system with questions they love, examples of their pacing, and the kinds of reveals they believe in. AI drafts more in that lane. The host then edits, rejects, improves, and publishes the final room. Demo creators could include Joy Bhattacharya, Debkumar Mitra, Sarbajit Mitra, Shabbir Haider, Robin Dey, and Kunal Mandal.",
        ),
        (
            "Route 1 nuance",
            "Seed questions to taste engine",
            "The host flow works best when real seed questions are fed into a taste map. For example, Shabbir-style questions show long narrative build-up, India-facing commerce or culture, delayed reveal, and a final payoff that feels inevitable only in hindsight. AI can generate more like this across new themes.",
        ),
        (
            "Route 2",
            "People can also go thematic",
            "A player can enter through a theme rather than a creator: food history, India brands, technology, sci-fi, culture, history, or general quiz. This route is about clean entry, low friction, and fast progression. It is the consumer play loop.",
        ),
        (
            "Mobile behavior",
            "Instagram-speed, immersive play",
            "The product should behave like a mobile-native habit app: vertical cards, one-question-at-a-time play, reveal moments, streaks, credits, and quick restarts. The goal is to make quizzing feel addictive without becoming noisy. One thumb, one card, one next tap.",
        ),
        (
            "Economics",
            "Subscription, credits, royalties",
            "The entry price can be simple: roughly INR 199 per month for premium rooms. Good performance earns credits that help open the next games. Creator royalties can be tied to session starts, completion depth, repeat play, ratings, and premium room usage.",
        ),
    ]

    for index, card in enumerate(cards):
        row = index // 2
        column = index % 2
        x = margin_x + column * (column_width + gutter)
        y = grid_top - row * (card_height + row_gap)
        draw_card(c, styles, x, y, column_width, card_height, *card)

    footer_y = 42
    footer_height = 58
    c.setFillColor(PALETTE["panel"])
    c.setStrokeColor(PALETTE["line"])
    c.roundRect(margin_x, footer_y, content_width, footer_height, 10, fill=1, stroke=1)
    footer_text = (
        "Critical nuance: archive rights must be licensed, human review must remain in the loop, and copy protection can only be best-effort on the open web. Watermarking, no-select behavior, one-card feeds, and blur-on-app-switch help, but this remains a strong sketch, not a finished plan."
    )
    draw_wrapped_paragraph(
        c,
        footer_text,
        styles["footer"],
        margin_x + 12,
        footer_y + footer_height - 10,
        content_width - 24,
        footer_height - 16,
    )

    c.showPage()
    c.save()
    return OUTPUT


if __name__ == "__main__":
    output = generate_pdf()
    print(output)
