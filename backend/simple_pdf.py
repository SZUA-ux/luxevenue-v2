from reportlab.lib.pagesizes import letter, A4
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, PageBreak, KeepTogether, Image as RLImage
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
from reportlab.pdfgen import canvas
from io import BytesIO
from datetime import datetime
import os

def generate_booking_pdf_html(booking_data):
    """Generate modern, professional PDF with logo and premium design"""
    
    # Format date
    date_obj = booking_data.get('date', '')
    if isinstance(date_obj, str):
        try:
            date_obj = datetime.fromisoformat(date_obj.replace('Z', '+00:00'))
        except:
            pass
    
    if isinstance(date_obj, datetime):
        booking_date = date_obj.strftime('%d %B %Y')
    else:
        booking_date = str(date_obj)
    
    # Get client name for filename
    client_name = booking_data.get('clientName', 'Booking')
    
    # Calculate payment status
    total_amount = float(booking_data.get('totalAmount', 0))
    discount = float(booking_data.get('discount', 0))
    paid_amount = float(booking_data.get('paidAmount', 0))
    balance_due = total_amount - discount - paid_amount
    
    if paid_amount >= (total_amount - discount):
        payment_status = "FULLY PAID"
        payment_color = colors.HexColor('#D4AF37')  # Gold
    elif paid_amount > 0:
        payment_status = "PARTIALLY PAID"
        payment_color = colors.HexColor('#FF6B9D')  # Magenta
    else:
        payment_status = "PENDING PAYMENT"
        payment_color = colors.HexColor('#8B8B8B')  # Dark grey
    
    # Create PDF buffer
    pdf_buffer = BytesIO()
    doc = SimpleDocTemplate(
        pdf_buffer,
        pagesize=A4,
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=40
    )
    
    # Container for PDF elements
    elements = []
    
    # Styles
    styles = getSampleStyleSheet()
    
    # Premium color palette
    gold = colors.HexColor('#D4AF37')
    black = colors.HexColor('#000000')
    dark_grey = colors.HexColor('#2C2C2C')
    magenta = colors.HexColor('#FF6B9D')
    light_grey = colors.HexColor('#F5F5F5')
    medium_grey = colors.HexColor('#666666')
    
    # ===== HEADER WITH LOGO =====
    header_table_data = []
    
    # Check if logo exists
    logo_path = '/app/frontend/public/luxe-venue-logo.png'
    if os.path.exists(logo_path):
        try:
            logo = RLImage(logo_path, width=2.5*inch, height=0.8*inch)
            header_table_data.append([logo, ''])
        except:
            # If logo fails, use text
            logo_style = ParagraphStyle(
                'LogoText',
                parent=styles['Heading1'],
                fontSize=28,
                textColor=gold,
                fontName='Helvetica-Bold',
                alignment=TA_LEFT
            )
            header_table_data.append([Paragraph('LUXE VENUE', logo_style), ''])
    else:
        logo_style = ParagraphStyle(
            'LogoText',
            parent=styles['Heading1'],
            fontSize=28,
            textColor=gold,
            fontName='Helvetica-Bold',
            alignment=TA_LEFT
        )
        header_table_data.append([Paragraph('LUXE VENUE', logo_style), ''])
    
    # Booking ID on right
    booking_id_style = ParagraphStyle(
        'BookingID',
        parent=styles['Normal'],
        fontSize=10,
        textColor=medium_grey,
        alignment=TA_RIGHT
    )
    booking_id_text = f"<b>Booking ID:</b> {booking_data.get('id', 'N/A')}"
    header_table_data[0][1] = Paragraph(booking_id_text, booking_id_style)
    
    header_table = Table(header_table_data, colWidths=[4*inch, 3*inch])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    elements.append(header_table)
    elements.append(Spacer(1, 0.3*inch))
    
    # ===== BOOKING CONFIRMATION TITLE =====
    title_style = ParagraphStyle(
        'Title',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=black,
        fontName='Helvetica-Bold',
        alignment=TA_LEFT,
        spaceAfter=4
    )
    elements.append(Paragraph('BOOKING CONFIRMATION', title_style))
    
    subtitle_style = ParagraphStyle(
        'Subtitle',
        parent=styles['Normal'],
        fontSize=11,
        textColor=medium_grey,
        alignment=TA_LEFT,
        spaceAfter=20
    )
    elements.append(Paragraph('Thank you for choosing LUXE VENUE for your special event', subtitle_style))
    
    # ===== GOLD DIVIDER LINE =====
    divider = Table([['']]*1, colWidths=[7*inch], rowHeights=[3])
    divider.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), gold),
    ]))
    elements.append(divider)
    elements.append(Spacer(1, 0.3*inch))
    
    # ===== SECTION HEADER STYLE =====
    section_style = ParagraphStyle(
        'SectionHeader',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=gold,
        fontName='Helvetica-Bold',
        spaceAfter=10,
        spaceBefore=8,
        leftIndent=0
    )
    
    # ===== CLIENT INFORMATION =====
    elements.append(Paragraph('■ CLIENT DETAILS', section_style))
    
    client_data = [
        ['Client Name', booking_data.get('clientName', 'N/A')],
        ['Contact Number', booking_data.get('clientPhone', 'N/A')],
        ['Email Address', booking_data.get('clientEmail', 'N/A')],
        ['Event Type', booking_data.get('eventType', 'N/A').title()],
    ]
    
    client_table = Table(client_data, colWidths=[2*inch, 5*inch])
    client_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('TEXTCOLOR', (0, 0), (0, -1), dark_grey),
        ('TEXTCOLOR', (1, 0), (1, -1), black),
        ('BACKGROUND', (0, 0), (-1, -1), light_grey),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ('TOPPADDING', (0, 0), (-1, -1), 12),
        ('LEFTPADDING', (0, 0), (-1, -1), 15),
        ('RIGHTPADDING', (0, 0), (-1, -1), 15),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.white, light_grey]),
    ]))
    elements.append(client_table)
    elements.append(Spacer(1, 0.3*inch))
    
    # ===== EVENT DETAILS =====
    elements.append(Paragraph('■ EVENT DETAILS', section_style))
    
    event_data = [
        ['Event Date', booking_date],
        ['Time', f"{booking_data.get('startTime', 'TBC')} - {booking_data.get('endTime', 'TBC')}"],
        ['Number of Guests', str(booking_data.get('guestCount', 0))],
        ['Venue Type', booking_data.get('bookingType', 'venue').title()],
    ]
    
    event_table = Table(event_data, colWidths=[2*inch, 5*inch])
    event_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('TEXTCOLOR', (0, 0), (0, -1), dark_grey),
        ('TEXTCOLOR', (1, 0), (1, -1), black),
        ('BACKGROUND', (0, 0), (-1, -1), light_grey),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ('TOPPADDING', (0, 0), (-1, -1), 12),
        ('LEFTPADDING', (0, 0), (-1, -1), 15),
        ('RIGHTPADDING', (0, 0), (-1, -1), 15),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.white, light_grey]),
    ]))
    elements.append(event_table)
    elements.append(Spacer(1, 0.3*inch))
    
    # ===== PAYMENT SUMMARY (PREMIUM BOX) =====
    elements.append(Paragraph('■ PAYMENT DETAILS', section_style))
    
    payment_data = [
        ['Total Amount', '', f"£{total_amount:.2f}"],
        ['Discount Applied', '', f"-£{discount:.2f}"],
        ['', '', ''],  # Divider row
        ['AMOUNT PAID', '', f"£{paid_amount:.2f}"],
        ['BALANCE DUE', '', f"£{balance_due:.2f}"],
        ['', '', ''],  # Divider row
        ['Payment Status', '', payment_status],
    ]
    
    payment_table = Table(payment_data, colWidths=[3*inch, 1*inch, 3*inch])
    payment_table.setStyle(TableStyle([
        # Regular rows
        ('FONTNAME', (0, 0), (-1, 1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, 1), 10),
        ('TEXTCOLOR', (0, 0), (0, 1), dark_grey),
        ('ALIGN', (2, 0), (2, -1), 'RIGHT'),
        # Divider row
        ('LINEABOVE', (0, 2), (-1, 2), 1, gold),
        # Paid amount row (highlighted)
        ('FONTNAME', (0, 3), (-1, 3), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 3), (-1, 3), 11),
        ('BACKGROUND', (0, 3), (-1, 3), colors.HexColor('#FFF9E6')),
        ('TEXTCOLOR', (0, 3), (-1, 3), dark_grey),
        # Balance due row (highlighted)
        ('FONTNAME', (0, 4), (-1, 4), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 4), (-1, 4), 11),
        ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#FFE6F0')),
        ('TEXTCOLOR', (0, 4), (-1, 4), dark_grey),
        # Status row
        ('LINEABOVE', (0, 6), (-1, 6), 1, gold),
        ('FONTNAME', (0, 6), (-1, 6), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 6), (-1, 6), 12),
        ('TEXTCOLOR', (2, 6), (2, 6), payment_color),
        # General styling
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('LEFTPADDING', (0, 0), (-1, -1), 12),
        ('RIGHTPADDING', (0, 0), (-1, -1), 12),
        ('BACKGROUND', (0, 0), (-1, -1), light_grey),
    ]))
    elements.append(payment_table)
    elements.append(Spacer(1, 0.5*inch))
    
    # ===== PAGE BREAK =====
    elements.append(PageBreak())
    
    # ===== LOGO ON PAGE 2 (SMALLER) =====
    if os.path.exists(logo_path):
        try:
            logo2 = RLImage(logo_path, width=1.8*inch, height=0.6*inch)
            elements.append(logo2)
        except:
            pass
    elements.append(Spacer(1, 0.2*inch))
    
    # ===== ADDITIONAL INFORMATION =====
    elements.append(Paragraph('■ ADDITIONAL INFORMATION', section_style))
    
    if booking_data.get('notes'):
        notes_style = ParagraphStyle(
            'Notes',
            parent=styles['Normal'],
            fontSize=10,
            textColor=black,
            leading=14,
            spaceAfter=12
        )
        elements.append(Paragraph(f"<b>Special Requests:</b> {booking_data.get('notes')}", notes_style))
    
    additional_data = [
        ['Menu Options', booking_data.get('menuDetails', 'To be finalized')],
        ['Dietary Requirements', 'Please inform us at least 7 days before the event'],
        ['Setup Time', '2 hours prior to event start'],
        ['Cleanup', 'Included in package'],
    ]
    
    additional_table = Table(additional_data, colWidths=[2*inch, 5*inch])
    additional_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('TEXTCOLOR', (0, 0), (0, -1), dark_grey),
        ('TEXTCOLOR', (1, 0), (1, -1), medium_grey),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('LEFTPADDING', (0, 0), (-1, -1), 15),
        ('RIGHTPADDING', (0, 0), (-1, -1), 15),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.white, light_grey]),
    ]))
    elements.append(additional_table)
    elements.append(Spacer(1, 0.3*inch))
    
    # ===== TERMS & CONDITIONS =====
    elements.append(Paragraph('■ TERMS & CONDITIONS', section_style))
    
    terms_style = ParagraphStyle(
        'Terms',
        parent=styles['Normal'],
        fontSize=8,
        textColor=dark_grey,
        leading=11,
        alignment=TA_JUSTIFY,
        spaceAfter=6
    )
    
    terms = [
        "<b>1. DEPOSIT & PAYMENT:</b> A non-refundable deposit of 25% is required to secure your booking. The remaining balance must be paid 14 days prior to the event date.",
        "<b>2. DATE CHANGES:</b> Changes to the event date must be requested in writing at least 30 days in advance, subject to availability. A £250 fee applies for date changes.",
        "<b>3. CANCELLATION:</b> Cancellations made more than 60 days before the event forfeit the deposit only. Cancellations within 60 days result in forfeiture of all payments.",
        "<b>4. GUEST NUMBERS:</b> Final guest count must be confirmed 7 days before the event. You will be charged for the confirmed number or actual attendees, whichever is greater.",
        "<b>5. VENUE ACCESS:</b> Venue access is granted only during agreed time slots. Additional hours may be available at £150 per hour, subject to availability.",
        "<b>6. LIABILITY:</b> LUXE VENUE is not liable for loss, damage, or injury except where caused by our negligence. Clients are responsible for guest behavior and any damages.",
        "<b>7. CONDUCT:</b> We reserve the right to refuse entry or remove guests for unacceptable behavior. Smoking is strictly prohibited inside the venue.",
        "<b>8. SUPPLIERS:</b> All external suppliers must be approved by LUXE VENUE. Clients are responsible for supplier arrangements and payments.",
    ]
    
    for term in terms:
        elements.append(Paragraph(term, terms_style))
    
    elements.append(Spacer(1, 0.3*inch))
    
    # ===== FOOTER =====
    footer_divider = Table([['']]*1, colWidths=[7*inch], rowHeights=[2])
    footer_divider.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), gold),
    ]))
    elements.append(footer_divider)
    elements.append(Spacer(1, 0.2*inch))
    
    footer_style = ParagraphStyle(
        'Footer',
        parent=styles['Normal'],
        fontSize=8,
        textColor=medium_grey,
        leading=11,
        alignment=TA_CENTER
    )
    
    footer_text = f"""
    <b>LUXE VENUE LTD</b><br/>
    86 Leopold Street, Birmingham B12 0UD, United Kingdom<br/>
    <b>T:</b> +44 7391 222884 | <b>E:</b> info@luxevenue.co.uk<br/>
    <br/>
    <i>Document generated on {datetime.now().strftime('%d/%m/%Y at %H:%M')}</i><br/>
    <br/>
    <b>By accepting this booking, you agree to the above terms and conditions.</b><br/>
    © {datetime.now().year} LUXE VENUE LTD. All rights reserved.
    """
    elements.append(Paragraph(footer_text, footer_style))
    
    # Build PDF
    doc.build(elements)
    pdf_buffer.seek(0)
    
    return pdf_buffer
